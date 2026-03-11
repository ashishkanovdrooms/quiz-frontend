import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface VoteState {
  question: number;
  votes: Record<number, number>;
  revealed: boolean;
  totalVoters: number;
}

@Injectable({ providedIn: 'root' })
export class VotingService implements OnDestroy {
  private ws: WebSocket | null = null;
  private readonly WS_URL = `ws://${window.location.host}`;

  readonly voteState$ = new BehaviorSubject<VoteState>({
    question: 0,
    votes: { 0: 0, 1: 0, 2: 0, 3: 0 },
    revealed: false,
    totalVoters: 0,
  });

  readonly connected$ = new BehaviorSubject<boolean>(false);
  readonly qrData$ = new BehaviorSubject<{ qr: string; url: string } | null>(null);

  private destroyed$ = new Subject<void>();

  connect(): void {
    if (this.ws) return;

    this.ws = new WebSocket(this.WS_URL);

    this.ws.onopen = () => {
      this.connected$.next(true);
      this.fetchQRCode();
    };

    this.ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.type === 'state') {
        this.voteState$.next({
          question: msg.question,
          votes: msg.votes,
          revealed: msg.revealed,
          totalVoters: msg.totalVoters,
        });
      }
    };

    this.ws.onclose = () => {
      this.connected$.next(false);
      this.ws = null;
      // Reconnect after 2s
      setTimeout(() => this.connect(), 2000);
    };

    this.ws.onerror = () => {
      this.ws?.close();
    };
  }

  setQuestion(questionNumber: number): void {
    this.send({ type: 'setQuestion', question: questionNumber });
  }

  revealAnswer(): void {
    this.send({ type: 'reveal' });
  }

  private send(msg: object): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(msg));
    }
  }

  private fetchQRCode(): void {
    fetch('/qr')
      .then((res) => res.json())
      .then((data) => this.qrData$.next(data))
      .catch(() => {});
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
    this.ws?.close();
  }
}

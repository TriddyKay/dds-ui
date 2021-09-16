import {Player} from "./Player"

export class Board {
  readonly p1: Player
  readonly p2: Player
  readonly turn: number

  constructor(board: Board) {
    this.p1 = board.p1
    this.p2 = board.p2
    this.turn = board.turn
  }
}

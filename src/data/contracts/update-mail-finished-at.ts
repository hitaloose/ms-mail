export interface UpdateMailFinishedAt {
  updateFinishedAt(mailId: string, finishedAt: Date): Promise<void>
}
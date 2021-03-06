export default class Battle {
  constructor(player, enemy, id) {
    this.player = player;
    this.enemy = enemy;
    this.id = id;
    this.turn = 0;
    this.musicianTurn = 0;
    this.won = false;
    this.lost = false;
  }

  nextTurn() {
    if (this.id === 5){
      return false;
    }
    if (this.musicianTurn === 0 && this.enemy.focusMod === 2) {
      this.enemy.focusMod = 1;
    } else if (this.musicianTurn === 1 && this.player.focusMod === 2) {
      this.player.focusMod = 1
    }
    this.turn++;
    this.musicianTurn = this.turn % 2;
    this.winBattleCheck();
  }

  winBattleCheck() {
    if (this.player.hype >= 100) {
      this.player.hype = 0;
      this.won = true;
    } else if (this.enemy.hype >= 100) {
      this.lost = true;
    }
  }
}
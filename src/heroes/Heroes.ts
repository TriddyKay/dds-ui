
export type Hero = {
  id: number
  name: string
  health: number
  armour: number
  healthRegen: number
  speed: number
  fainted: boolean
}

export const Heroes: Hero[] = [
  {id: 2,
    name: "Alchemist",
    health: 700,
    armour: 2,
    healthRegen: 5,
    speed: 305,
    // moves: [AlchemistMoves.AcidSpray, AlchemistMoves.UnstableConcoction, AlchemistMoves.GreevilsGreed, AlchemistMoves.ChemicalRage],
    fainted: false},
  {id: 3,
    name: "Axe",
    health: 700,
    armour: 2,
    healthRegen: 5,
    speed: 310,
    // moves: [AxeMoves.BeserkersCall, AxeMoves.BattleHunger, AxeMoves.CounterHelix, AxeMoves.CullingBlade],
    fainted: false},
  {id: 4,
    name: "Beastmaster",
    health: 660,
    armour: 2,
    healthRegen: 2,
    speed: 305,
    // moves: [BeastMasterMoves.WildAxes, BeastMasterMoves.CallOfTheWild, BeastMasterMoves.InnerBeast, BeastMasterMoves.PrimalRoar],
    fainted: false},
  {id: 5,
    name: "Brewmaster",
    health: 660,
    armour: 2,
    healthRegen: 3,
    speed: 320,
    // moves: [BrewMasterMoves.CinderBrew, BrewMasterMoves.DrunkenBrawler, BrewMasterMoves.ThunderClap, BrewMasterMoves.PrimalSpirit],
    fainted: false
  }]

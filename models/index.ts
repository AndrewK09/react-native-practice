export enum Duelists {
  A = 'A',
  B = 'B',
}

export enum Modes {
  SPEED,
  TCG,
}

export const LIFEPOINTS = {
  SPEED: 4000,
  TCG: 8000,
};

export const DUELIST_LIFEPOINTS = {
  [Modes.SPEED]: {
    [Duelists.A]: LIFEPOINTS.SPEED,
    [Duelists.B]: LIFEPOINTS.SPEED,
  },
  [Modes.SPEED]: {
    [Duelists.A]: LIFEPOINTS.TCG,
    [Duelists.B]: LIFEPOINTS.TCG,
  },
};

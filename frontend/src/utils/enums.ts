export enum StatusEnum {
  IDLE,
  LOADING,
  SUCCEEDED,
  FAILED,
}

export enum FillerCardEnum {
  // INVALID = -1,
  BOTTOM_MESSAGE,
  NO_COMMENTS,
  SHOW_CHILDREN,
}

// BLUE = 0 because depth = 0 we have no bar but depth = 6 we should have blue bar
export enum BarColourEnum {
  BLUE,
  RED,
  ORANGE,
  YELLOW,
  GREEN,
  TEAL,
}

import * as util from './util.js';

const logEnv = function (moveReward, playground = null, ghost = null, ghostPos = null, user = null) {
    if (ghostPos !== null) {
        let x, y;
        for (let i = 0; i < ghostPos.length; i++) {
            x = util.pointToCoord(ghostPos[i]['new']['x']);
            y = util.pointToCoord(ghostPos[i]['new']['y']);
            if (ghost[i].isVunerable()) {
                // playground[x][y] = util.VULNERABLE_GHOST;
            } else {
                // playground[x][y] = util.INVULNERABLE_GHOST;
            }
        }
    }
};

export { logEnv };
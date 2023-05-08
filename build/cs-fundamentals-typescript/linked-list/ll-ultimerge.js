"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.llUltimerge = void 0;
const llUltimerge = (listA, listB) => {
    let currentA = listA;
    let currentB = listB;
    let ultimerged = null;
    let curUltimerged = null;
    while (currentA || currentB) {
        if (currentA) {
            if (!curUltimerged) {
                curUltimerged = ultimerged = currentA;
            }
            else {
                curUltimerged.next = currentA;
                curUltimerged = curUltimerged.next;
            }
            currentA = currentA.next;
        }
        if (currentB) {
            if (!curUltimerged) {
                curUltimerged = ultimerged = currentB;
            }
            else {
                curUltimerged.next = currentB;
                curUltimerged = curUltimerged.next;
            }
            currentB = currentB.next;
        }
    }
    return ultimerged;
};
exports.llUltimerge = llUltimerge;

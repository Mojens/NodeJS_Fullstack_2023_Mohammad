export const guards = [
    "Hank the tank",
    "Bobby the bobby",
    "Thomas the tank engine",
    "Bobby the bobby",
    "CEPUS"
]

export function addGuard(guard) {
    guards.push(guard);
    return guards;
}


export default {
    guards,
    addGuard
}

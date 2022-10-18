const Player = (name, level)=>{
    let health = level * 2;
    const getLevel = () => level;
    const getName = () => name;
    const die = () => {
        // ul oh
    };
    const damage = x => {
        health -= x;
        if ( health <= 0){
            die();
        }
    };
    const attack = enemy => {
        if (level < enemy.getLevel()){
            console.log(`${enemy.getLevel()} has damaged ${name}`);
    }
    if (level >= enemy.getLevel()){
        enemy.damage(1);
        console.log(`${name} has damaged ${enemy.getName()}`);
    }
    };
    return {attack, damage, getLevel, getName};
};

const jimmie = Player('jin', 10);
const badGuy = Player('jeff', 5);
jimmie.attack(badGuy);
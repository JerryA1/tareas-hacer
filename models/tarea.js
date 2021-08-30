const { v4: uuidv4 } = require('uuid');

class Tarea{
    id = '';
    desc = '';
    done = null;

    constructor(desc){
        this.id = uuidv4();
        this.desc = desc;
        this.done = null;
    }
}

module.exports = Tarea;
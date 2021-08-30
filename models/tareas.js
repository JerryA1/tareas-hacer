const Tarea = require("./tarea");

class Tareas{
    _listado = {};

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });

        return listado;
    }

    constructor(){
        this._listado = {};
    }

    borrarTarea(id = ''){
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    cargarTareasFromArray(tareas = []){
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(){
        this.listadoArr.forEach((tarea, index) => {
            console.log(`${index+1}`.green, tarea.desc+' :: '+((tarea.done == null) ? 'Pendiente'.red : 'Completada'.green));
        });
    }

    listarPendientesCompletadas(completadas = true){
        let contador = 0;
        this.listadoArr.forEach(tarea => {
            if (completadas) {
                if(tarea.done){
                    contador +=1;
                    console.log(`${contador}.`.green, tarea.desc+' :: '+`${tarea.done}`.green);
                }
            } else {
                if(!tarea.done){
                    contador +=1;
                    console.log(`${contador}.`.green, tarea.desc+' :: '+'Pendiente'.red);
                }
            }
        });
    }

    toggleCompletadas(ids = []){
        ids.forEach(id => {
            const tarea = this._listado[id];
            if(!tarea.done){
                tarea.done = new Date().toISOString()
            }
        });

        this.listadoArr.forEach(tarea => {
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].done = null;
            }
        });
    }
}

module.exports = Tareas;

class person{
    #myname='Hardik';
    getname=()=>{
        return this.#myname;
    }
}
const name=new person();

console.log(name.getname());
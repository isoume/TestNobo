class DataLocal{
    static data=null;

    static setData(eleme){
        this.data=eleme;
    }
    static getData(){
        return this.data
    }
    static dataGetted(){
        if(this.data!=null)
            return true;

        return false;
    }
}
export default DataLocal;
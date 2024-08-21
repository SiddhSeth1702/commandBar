import { Model } from "objection";


class Glossary extends Model {
    id!: number;
    term!: string;
    defination!: string;
    static get tableName() {
        return 'glossary'
    }
    static get timestamps() {
        return true;
    }

}
export default Glossary
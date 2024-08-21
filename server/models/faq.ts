import { Model } from "objection";


class Faq extends Model {
    id!: number;
    question!: string;
    answer!: string;
    static get tableName() {
        return 'faq'
    }
    static get timestamps() {
        return true;
    }

}
export default Faq
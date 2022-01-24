import { Model } from 'mongoose';
import { CreateCatDto } from './createCat.dto';
import { Cat, CatDocument } from './cat.schema';
export declare class CatsService {
    private readonly catModel;
    constructor(catModel: Model<CatDocument>);
    create(createCatDto: CreateCatDto): Promise<Cat>;
    findAll(): Promise<Cat[]>;
}

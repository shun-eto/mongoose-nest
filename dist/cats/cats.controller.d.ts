import { CatsService } from './cats.service';
import { CreateCatDto } from './createCat.dto';
import { Cat } from './cat.schema';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    create(createCatDto: CreateCatDto): Promise<void>;
    findAll(): Promise<Cat[]>;
}

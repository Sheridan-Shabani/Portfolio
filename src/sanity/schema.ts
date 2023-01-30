import {SchemaTypeDefinition} from 'sanity'

import {articleType} from './article'
import {pageElementType, pageType} from './page'
import {experienceType} from "../../schemas/experience";
import {pageInfo} from "../../schemas/pageInfo";
import {project} from "../../schemas/project";
import {skill} from "../../schemas/skill";
import {social} from "../../schemas/social";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        articleType,
        pageElementType,
        pageType,
        social,
        experienceType,
        skill,
        project,
        pageInfo],
}

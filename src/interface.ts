import { Try } from 'funfix-core'

interface ProjectInterface {
    localizer(complete_html: string): Try<string>
    // tslint:disable-next-line:no-any
    parser(html: string): Try<any>
}

interface EntityInterface {
    name: string,
    modifier__set: Set<string>
}

export { EntityInterface }

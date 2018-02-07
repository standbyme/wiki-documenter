import term from '../../term'

const mapping: [[string, string]] = [
    ['中文名', term.chinese_name],
    ['国籍', term.nationality],
    ['民族', term.nation],
    ['出生地', term.place_of_birth],
    ['出生日期', term.date_of_birth],

]

export default new Map(mapping)

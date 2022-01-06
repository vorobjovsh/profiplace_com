/**
 * TODO: разобраться с наймингом
 * naming: {
    delims: {
        elem: '-',
        mod: { name: '--', val: '_' }
        },
        wordPattern: '[a-zA-Z0-9]+'
    }
 */
module.exports = {
    root: true,
    modules: {
        'bem-tools': {
            plugins: {
                create: {
                techs: ['html', 'scss'],
                    levels: {
                        'src/components': {
                            default: true
                        }
                    }
                }
            }
        }
    }
}

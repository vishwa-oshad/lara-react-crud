import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ProductController::html
 * @see app/Http/Controllers/ProductController.php:10
 * @route '/products'
 */
export const html = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: html.url(options),
    method: 'get',
})

html.definition = {
    methods: ["get","head"],
    url: '/products',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProductController::html
 * @see app/Http/Controllers/ProductController.php:10
 * @route '/products'
 */
html.url = (options?: RouteQueryOptions) => {
    return html.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::html
 * @see app/Http/Controllers/ProductController.php:10
 * @route '/products'
 */
html.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: html.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProductController::html
 * @see app/Http/Controllers/ProductController.php:10
 * @route '/products'
 */
html.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: html.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProductController::html
 * @see app/Http/Controllers/ProductController.php:10
 * @route '/products'
 */
    const htmlForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: html.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProductController::html
 * @see app/Http/Controllers/ProductController.php:10
 * @route '/products'
 */
        htmlForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: html.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProductController::html
 * @see app/Http/Controllers/ProductController.php:10
 * @route '/products'
 */
        htmlForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: html.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    html.form = htmlForm
/**
* @see \App\Http\Controllers\ProductController::create
 * @see app/Http/Controllers/ProductController.php:15
 * @route '/products/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/products/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProductController::create
 * @see app/Http/Controllers/ProductController.php:15
 * @route '/products/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::create
 * @see app/Http/Controllers/ProductController.php:15
 * @route '/products/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProductController::create
 * @see app/Http/Controllers/ProductController.php:15
 * @route '/products/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProductController::create
 * @see app/Http/Controllers/ProductController.php:15
 * @route '/products/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProductController::create
 * @see app/Http/Controllers/ProductController.php:15
 * @route '/products/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProductController::create
 * @see app/Http/Controllers/ProductController.php:15
 * @route '/products/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
const products = {
    html: Object.assign(html, html),
create: Object.assign(create, create),
}

export default products
import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ProductController::html
 * @see app/Http/Controllers/ProductController.php:11
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
 * @see app/Http/Controllers/ProductController.php:11
 * @route '/products'
 */
html.url = (options?: RouteQueryOptions) => {
    return html.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::html
 * @see app/Http/Controllers/ProductController.php:11
 * @route '/products'
 */
html.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: html.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProductController::html
 * @see app/Http/Controllers/ProductController.php:11
 * @route '/products'
 */
html.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: html.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProductController::html
 * @see app/Http/Controllers/ProductController.php:11
 * @route '/products'
 */
    const htmlForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: html.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProductController::html
 * @see app/Http/Controllers/ProductController.php:11
 * @route '/products'
 */
        htmlForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: html.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProductController::html
 * @see app/Http/Controllers/ProductController.php:11
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
const products = {
    html: Object.assign(html, html),
}

export default products
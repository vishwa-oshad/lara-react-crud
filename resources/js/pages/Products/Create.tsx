
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create a New Product',
        href: '/products/create',
    },
];

export default function Index() {

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        price: '',
        description: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        console.log(data)

    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create a New Product" />
            <div className="w-8/12 p-4">

                <form onSubmit={handleSubmit} className='space-y-4'>
                    {/* Display error */}
                    
                    <div className='gap-1.5'>
                        <Label htmlFor="product name">Product Name</Label>
                        <input placeholder='Name' value={data.name} onChange={(e) => setData('name', e.target.value)} type="text" id="name" name="name" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
                    </div>
                    <div className='gap-1.5'>
                        <Label htmlFor="product price">Price</Label>
                        <input placeholder='Price' value={data.price} onChange={(e) => setData('price', e.target.value)} type="text" id="price" name="price" className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
                    </div>
                    <div className='gap-1.5'>
                        <Label htmlFor="product description">Description</Label>
                        <Textarea placeholder='Description' value={data.description} onChange={(e) => setData('description', e.target.value)} id="description" name="description" className='w-full h-24' />
                    </div>
                    <Button type="submit" className='mt-4'>Add Product</Button>
                </form>

            </div>
        </AppLayout>
    );
}

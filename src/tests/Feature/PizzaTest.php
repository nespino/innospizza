<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Product;

class PizzaTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test if API is working and retrieves a correct product
     *
     * @return void
     */
    public function testGetProduct()
    {
        $product = factory(Product::class)->create();

        $response = $this->json('GET', '/api/products');

        $response->assertStatus(200)
                 ->assertJsonStructure([
                    ['id', 'name', 'usd_price']
                 ]);
    }

    /**
     * Tests new product creation through API route
     *
     * @return void
     */
    public function testPostProduct()
    {
        $fake_product = factory(Product::class)->make();

        $response = $this->json('POST', '/api/products', [
            'name' => $fake_product->name,
            'usd_price' => $fake_product->usd_price,
            'description' => $fake_product->description,
            'image_url' => $fake_product->image_url
        ]);

        $response->assertStatus(201)
                 ->assertJsonStructure([
                     'product'=>
                      ['id', 'name', 'usd_price', 'description', 'image_url']
                  ]);

        $product = Product::find($response->json()['product']['id']);
        $this->assertNotNull($product);
        $this->assertEquals($fake_product->only(['name', 'usd_price', 'description', 'image_url']),
            $product->only(['name', 'usd_price', 'description', 'image_url']));
    }

    /**
     * Tests product update through API route
     *
     * @return void
     */
    public function testPutProduct()
    {
        $fake_product = factory(Product::class)->create();
        $fake_product_for_name = factory(Product::class)->make();

        $response = $this->json('PUT', '/api/products/' . $fake_product->id, [
            'name' => $fake_product_for_name->name,
            'usd_price' => $fake_product->usd_price,
            'description' => $fake_product->description,
            'image_url' => $fake_product->image_url
        ]);

        $response->assertStatus(202)
            ->assertJsonStructure([
                'product'=>
                    ['id', 'name', 'usd_price', 'description', 'image_url']
            ]);

        $fake_product->name = $fake_product_for_name->name;

        $product = Product::find($response->json()['product']['id']);
        $this->assertNotNull($product);
        $this->assertEquals($fake_product->only(['name', 'usd_price', 'description', 'image_url']),
            $product->only(['name', 'usd_price', 'description', 'image_url']));
    }

    /**
     * Tests product deletion through API route
     *
     * @return void
     */
    public function testDeleteProduct()
    {
        $fake_product = factory(Product::class)->create();

        $response = $this->json('DELETE', '/api/products/' . $fake_product->id);

        $response->assertStatus(200);

        $product = Product::find($fake_product->id);
        $this->assertNull($product);

    }
}

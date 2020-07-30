<?php

use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert(array(
                array(
                    'name' => 'Della Mamma',
                    'description' => 'Paparella cheese, homemade tomato sauce, green olives, oregano and basil aioli.',
                    'usd_price' => 7.76,
                    'image_url' => 'della_mamma.png'
                ),
                array(
                    'name' => 'Caramelita',
                    'description' => 'Paparella cheese, caramelized onion, oregano, whole sugar and olive oil.',
                    'usd_price' => 7.76,
                    'image_url' => 'caramelita.png'
                ),
                array(
                    'name' => 'Bolonia',
                    'description' => 'Paparella cheese, soy textured organic red wine and homemade tomato sauce. Green olives and basil oil.',
                    'usd_price' => 8.31,
                    'image_url' => 'bolonia.png'
                ),
                array(
                    'name' => 'Vegalitana',
                    'description' => 'Paparella cheese, sliced tomatoes, garlic and oregano, and garlic aioli.',
                    'usd_price' => 7.96,
                    'image_url' => 'vegalitana.png'
                ),
                array(
                    'name' => 'De la India',
                    'description' => 'Paparella cheese, grilled aubergines with peppers, onions, curries, homemade tomato sauce and sesame seeds.',
                    'usd_price' => 8.31,
                    'image_url' => 'de_la_india.png'
                ),
                array(
                    'name' => 'Rocola',
                    'description' => 'Paparella cheese, dried spicy tomatoes, fresh arugula, black olives and olive oil.',
                    'usd_price' => 9.70,
                    'image_url' => 'rocola.png'
                ),
                array(
                    'name' => 'Portugal',
                    'description' => 'Paparella cheese, grilled red and green bell peppers, onion, sesame seeds, olive oil.',
                    'usd_price' => 8.31,
                    'image_url' => 'portugal.png'
                ),
                array(
                    'name' => 'Super Mario',
                    'description' => 'Paparella cheese, sauteed mushrooms with onion, roasted sunflower seeds and provençal aioli.',
                    'usd_price' => 10.94,
                    'image_url' => 'super_mario.png'
                ))
        );
    }
}

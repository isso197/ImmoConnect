<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Annonce;

class ImageAnnonceFactory extends Factory
{
    public function definition(): array
    {
        return [
            'annonce_id' => Annonce::factory(),

            'file_path' => 'images/' . fake()->image('public/storage/images', 640, 480, null, false),

            'ordre' => fake()->numberBetween(1, 5),
        ];
    }
}
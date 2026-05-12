<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Annonce;

class AnnonceSeeder extends Seeder
{
         
    public function run(): void
    {
        Annonce::factory()->count(20)->create();
    }
}

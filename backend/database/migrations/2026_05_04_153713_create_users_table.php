<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


return new class extends Migration {
    public function up():void{
        Schema::create('users',function(Blueprint $table) {
            $table->id();
            $table->string('nom_complet') ;
            $table->string('email')->unique();
            $table->string('password');
            $table->string('telephone');
            $table->string('ville')->nullable();
            $table->string('photo_profil')->nullable();
            $table->enum('status',['user','admin'])->default('user');
            $table->timestamps() ;
        });

    }
    public function down():void {
        Schema::dropIfExists('users');
    }
}
?>

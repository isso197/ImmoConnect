<?php 
    use Illuminate\Database\Migrations\Migration;
    use Illuminate\Database\Schema\Blueprint;
    
    use Illuminate\Support\Facades\Schema;

    return new class extends Migration {
        public function up ():void {
            Schema::create('demandes_contact',function(Blueprint $table){
                $table->id();
                $table->foreignId('annonce_id')->constrained()->onDelete('cascade');
                $table->foreignId('user_id')->constrained()->onDelete('cascade');
                $table->string('nom_contact');
                $table->string('telephone_contact');
                $table->text('message');
                $table->enum('status',['en_attente','acceptee','refusee'])->default('en_attente');
                $table->text('note_admin')->nullable() ;
                $table->timestamps();
            });
        }
        public function down ():void {
            Schema::dropIfExists('demandes_contact');
        } 
    }
?>
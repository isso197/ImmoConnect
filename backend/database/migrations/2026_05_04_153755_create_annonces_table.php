<?php 
    use Illuminate\Database\Migrations\Migration;
    use Illuminate\Database\Schema\Blueprint;
    use Illuminate\Support\Facades\Schema;
    

    return new class extends Migration{
        public function up():void{
            Schema::create('annonces', function(Blueprint $table){
                $table->id() ;
                $table->foreignId('user_id')->constrained()->onDelete('cascade');
                $table->string('titre');
                $table->enum('type_bien',['appartement','maison','terrain'])->default('appartement');
                $table->enum('type_offre',['vente','location'])->default('vente');
                $table->decimal('prix',15,2);
                $table->string('ville');
                $table->string('address')->nullable();
                $table->float('surface');
                $table->integer('nb_chambre')->nullable();
                $table->integer('nb_salles_bain')->nullable();
                $table->enum('status',['en_attente','validee','refusee','supprimee'])->default('en_attente');
                $table->timestamps();
            });
        }

        public function down():void{
            Schema::dropIfExists('annonces');
        }
    }
?>

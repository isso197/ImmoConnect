<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Favori;
use App\Models\Annonce;

class FavoriController extends Controller
{
    public function index(Request $request){
        $favoris = Favori::where("user_id",$request->user()->id);
        return response()->json([
            "success"=>true,
            "message"=>"all fav annonce",
            "data"=>$favoris
        ]);
    }

    public function store(Request $request, Annonce $annonce){

        $exists = Annonce::where('user_id',$request->user()->id)->where('annonce_id',  $annonce->id)->exists();

        if($exists){
            return response()->json([
                "success"=>false,
                "message"=>"the annonce is already in favorus"
            ]);
        }

        $favori = Favori::create([
        "annonce_id" => $annonce->id,
        "user_id" => $request->user()->id
        ]);

        return response()->json([
            "success"=>true,
            "message"=>"all fav annonce",
            "data"=>$favori
        ]); 
    }

    public function delete(Request $request , Annonce $annonce){

        $favori = Favori::where('user_id',$request->user()->id)->where("annonce_id",$annonce->id)->first();
        if(!$favori){
            return response()->json([
                "success"=>false,
                "message"=>"the annonce is not already deleted"
            ]);
        }

        $favori->delete();
        return response()->json([
            "success"=>true,
            "message"=>"the annonce is deleted"
        ]);
    }
}


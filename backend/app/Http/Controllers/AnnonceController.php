<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Annonce;

class AnnonceController extends Controller
{
    public function index(){
        return response()->json([
            "status"=>"success",
            "data"=>Annonce::all()
        ]);
    }

    public function show(Annonce $annonce){
        return response()->json([
            "status"=>"success",
            "data"=>$annonce
        ]);
    }

    public function store(Request $request){
        $validated = $request->validate([
            "title"=>"required|string|max:255",
            "property_type"=>"required|in:appartement,maison,terrain",
            "listing_type"=>"required|in:vente,location",
            "price"=>"required|numeric",
            "city"=>"required|string|max:255",
            "address"=>"nullable|string|max:255",
            "rooms"=>"nullable|numeric",
            "bathrooms"=>"nullable|numeric"
        ]);
        $validated['user_id'] = $request->user()->id;

        $annonce = Annonce::create($validated);

        return response()->json([
            "status"=>"success",
            "data"=>$annonce
        ]);
    }

    public function update(Request $request , Annonce $annonce){

        //not any user could update
        if($request->user()->id !== $annonce->user_id){
            return response()->json([
                "message"=>"Unauthorised"
            ],403);
        }

        $validated = $request->validate([
            "title"=>"sometimes|string|max:255",
            "property_type"=>"sometimes|in:appartement,maison,terrain",
            "listing_type"=>"sometimes|in:vente,location",
            "price"=>"sometimes|numeric",
            "city"=>"sometimes|string|max:255"
            "address"=>"nullable|string|max:255",
            "rooms"=>"nullable|numeric",
            "bathrooms"=>"nullable|numeric"
        ]);

        $annonce->update($validated);

        return response()->json([
            "status"=>"success",
            "data"=>$annonce
        ]);
    }

    public function destroy(Annonce $annonce){

        if($request->user()->id !== $annonce->user_id){
            return response()->json([
                "message"=>"Unauthorised"
            ],403);
        }

        $annonce->delete();
        return response()->json([
            "success"=>true,
            "message"=>"annonce well deleted"
        ]);
    }

    public function latest(){
        $annonces = Annonce::latest()->get();
        return response()->json([
            "success"=>true,
            "data"=>$annonces
        ]);

    }
}




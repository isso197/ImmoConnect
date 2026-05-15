<?php

namespace App\Http\Controllers;
use App\Models\DemandeContact;


use Illuminate\Http\Request;


class DemandeContactController extends Controller
{
    public function index(Request $request){
        $query = DemandeContact::with('user','annonce')->latest();
        if($request->user()->role !== "admin"){
            $query->where('user_id',$request->user()->id);
        }
        return response()->json([
            "success"=>true,
            "data"=>$query->paginate(10)
        ]);
    }


    public function show(Request $request ,DemandeContact $demande){
        if($request->user()->role !== "admin" && $request->user()->id !== $demande->user_id ){
            return response()->json([
            "success"=>false,
            "message"=>"unauthorized user"
        ],403);
        }
        return response()->json([
            "success"=>true,
            "data"=>$demande->load('user','annonce')
        ]);
    }

    public function destroy(Request $request , DemandeContact $demande){
        if($demande->user_id !== $request->user()->id && $request->user()->role !== "admin"){
            return response()->json([
                "success"=>false,
                "message"=>"user unauthorized"
            ],403);
        };
        $demande->delete();
         return response()->json([
                "success"=>true,
                "message"=>"demande contact deleted seccesfully !"
            ]);
    }
    public function filter(Request $request){

        //$query = DemandeContact::query(); we did at firs but we are gonna add the user and annonce data just in case the front
        //needed it

        $query = DemandeContact::where('user',"annonce");

        if($request->status === "en_attente"){
            $query->pending();
        }
        if($request->status ==="acceptee"){
            $query->accepted();
        }
        if($request->status === "refusee"){
            $query->refused();
        }
        if($request->user()->role === "admin"){
            if($request->is_read === "true"){
                $query->read();
            }
            if($request->is_read === "false"){
                $query->unread();
            }
            if($request->filled('admin_note') && $request->admin_note===null){
                $query->untreated();
            }
        }else{
            $query->where('user_id',$request->user()->id);
        }

        $data = $query->latest()->paginate(10);

        return response()->json([
            "success"=>true,
            "data"=>$data
        ]);
    }
}


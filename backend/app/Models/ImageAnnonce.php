<?php

namespace App\Models;

use App\Models\Annonce;
use Illuminate\Database\Eloquent\Model;

class ImageAnnonce extends Model
{
    protected $fillable=[
        "annonce_id",
        "file_path",
        "ordre",
    ];

    protected $casts= [
        'created_at'=>'datetime',
        'updated_at'=>'datetime'
    ];

    public function annonce(){
        return $this->belongsTo(Annonce::class);
    }

    //keep the scopes and buisness function for later

}

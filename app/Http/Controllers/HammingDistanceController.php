<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;

class HammingDistanceController extends Controller
{
    // function to calculate hamming distance
    private function hammingDistance($x, $y)
    {
        // convert number to binary
        $binary1 = str_pad(decbin($x), 4, "0", STR_PAD_LEFT);
        $binary2 = str_pad(decbin($y), 4, "0", STR_PAD_LEFT);

        // convert Binary to GMP Object
        $ham1 = gmp_init($binary1);
        $ham2 = gmp_init($binary2);

        // compute hamming distance
        $result = gmp_hamdist($ham1, $ham2);

        // add extra spaces in between
        $str = '';
        for ($i=0; $i < 4; $i++) { 
            $str .= $binary1[$i].' ';
        }
        $binary1 = $str;
        $str = '';
        for ($i=0; $i < 4; $i++) { 
            $str .= $binary2[$i].' ';
        }
        $binary2 = $str;

        return response()->json([
            'input'=>"x = {$x}, y = {$y}",
            'result'=>$result,
            'x'=>"( {$binary1})",
            'y'=>"( {$binary2})",
        ]);
    }

    public function computeHammingDistance(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'x' => 'required|integer',
            'y' => 'required|integer'
        ]);
        if($validator->fails()){
            return response()->json([
                'status'=>'Error',
                'message'=>'Incomplete form details',
                'errors'=>$validator->messages()
            ],200);
        }

        $response = $this->hammingDistance($input['x'], $input['y']);
        
        return $response;
    }
}

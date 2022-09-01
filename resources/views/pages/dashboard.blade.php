@extends('layouts.admin')

@section('page-content')
    <div class="container-fluid">
        <h2>Welcome {{ \Auth::user()->name }}!</h2>
    </div>
    
    <dashboard></dashboard>
@endsection
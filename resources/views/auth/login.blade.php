@extends('layouts.unauth')

@section('page-content')
    @if(\Auth::check())
        <login-card :_auth="{{ \Auth::user()->toJson() }}"></login-card>
    @else
        <login-card></login-card>
    @endif
@endsection
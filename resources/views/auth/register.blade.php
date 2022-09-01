@extends('layouts.unauth')

@section('page-content')
    @if(\Auth::check())
        <login-card :_auth="{{ \Auth::user()->toJson() }}"></login-card>
    @else
        <users-form></users-form>
    @endif
@endsection
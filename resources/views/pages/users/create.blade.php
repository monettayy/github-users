@extends('layouts.admin')

@section('page-content')
    <users-form :_auth="{{ \Auth::user()->toJson() }}"></users-form>
@endsection
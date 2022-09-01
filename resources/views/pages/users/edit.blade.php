@extends('layouts.admin')

@section('page-content')
    <users-form :_user="{{ $user->toJson() }}"></users-form>
@endsection
@extends('layouts.master')

@section('page-layout')

<body class="bg-gradient-primary">

    <div class="container" id="app">
        @yield('page-content')
    </div>

    @include('layouts.scripts')

</body>
@endsection
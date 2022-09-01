@extends('layouts.master')

@section('page-layout')
<body id="page-top">
    <!-- Page Wrapper -->
    <div id="app">
        <div id="wrapper">

            @include('layouts.sidebar')
            <!-- Content Wrapper -->
            <div id="content-wrapper" class="d-flex flex-column">

                <!-- Main Content -->
                <div id="content">
                    @include('layouts.topbar')
                    <!-- Begin Page Content -->
                    <div class="container-fluid">

                        <!-- Page Heading -->
                        @yield('page-heading')

                        <!-- Content Row -->
                        @yield('page-content')
                        <!-- Content Row -->
                    </div>
                    <!-- /.container-fluid -->
                </div>
                <!-- End of Main Content -->

                <!-- Footer -->
                @include('layouts.footer')
                <!-- End of Footer -->
            </div>
            <!-- End of Content Wrapper -->
        </div>
        <!-- End of Page Wrapper -->

        <!-- Scroll to Top Button-->
        <a class="scroll-to-top rounded" href="#page-top">
            <i class="fas fa-angle-up"></i>
        </a>

        <!-- Logout Modal-->
        <logout-modal></logout-modal>
        
    </div>
    @include('layouts.scripts')

</body>
@endsection
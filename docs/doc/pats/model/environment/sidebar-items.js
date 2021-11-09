initSidebarItems({"enum":[["EnvFields","Enum containing fields on pressure levels that can be requested."],["SurfaceFields","Enum containing surface fields that can be requested."]],"fn":[["approx_central_lon","Function to approximate the longitude of domain centre on the WGS84 ellipsoid."],["compute_domain_edges","Function to get a lat-lon extent of domain with margins."],["compute_top_lat","Function to compute the latitude of domain top on the WGS84 ellipsoid."],["convert_to_grib_longitudes","Converts the longitude in convention used by model (longitude between -180 and 180) to longitude in GRIB convention (any positive integer)."],["find_extent_edge_indices","Finds closests indices in the GRIB input files grid that fully cover domain with margins (it is with some excess)."],["generate_domain_projection","Function to create a geographic projection struct with parameters that allow for lowest distorion for a given domain."],["measure_domain_sides","Function to get domain sides length in meters."]],"mod":[["accesser","Module with methods for accessing the environment and surface boundary conditions data."],["bisection","Module containg methods for conducting binary search (bisection) of elements closests to searched values in datasets."],["buffer","Module containing methods responsible for buffering data from GRIB input."],["interpolation","Module containing interpolation methods."],["projection","Module with methods to do computations of geographical projection used by the model. Closely follows algorithms and instructions in: https://pubs.er.usgs.gov/publication/pp1395"]],"struct":[["DomainExtent",""],["Environment","Environment main struct storing and providing boundary condition (environment) data."],["Fields","Struct for storing environmental variables from levels above ground (currently pressure levels)."],["Surface","Struct for storing environmental variables at/near surface."]]});
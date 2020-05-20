copy uav_control to /path/to/catkin_ws/src
catkin build
source devel/setup.bash

RUN:
cd /path/to/Firmware
make px4_sitl_default gazebo_iris
*another terminal*
roslaunch uav_control waypoint_control.launch

CONFIG waypoint:
edit waypoint_points.yaml (/path/to/catkin_ws/src/uav_control/yaml)

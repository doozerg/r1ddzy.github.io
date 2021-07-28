function reset() {
  location.reload();
  return false;
}

function creatConfig() {
  ip = document.getElementById("ip_switch").value;
  mask = document.getElementById("mask").value;
  gateway = document.getElementById("gateway").value;
  vlan = document.getElementById("vlan").value;
  password = document.getElementById("password").value;
  promt = document.getElementById("promt").value;
  config.classList.remove("off_display");
  if (document.getElementById("switch").value === "Edge-Core-28") {
    document.getElementById("config").innerHTML =
      "configure<br>ip ssh server-key size 896<br>jumbo frame<br>no snmp-server community public<br>no snmp-server community private<br>snmp-server community XXXXXXXXXX rw<br>sntp client<br>sntp server 10.230.100.101 10.230.100.100<br>clock timezone moscow hour 3 after-utc<br>username admin access-level 15<br>username admin password 0 " +
      password +
      "<br>no username guest<br>vlan database<br>vlan 1 name DefaultVlan media ethernet state active<br>vlan " +
      vlan +
      " name mgmt_vlan media ethernet state active<br>exit<br>ip dhcp snooping<br>ip dhcp snooping vlan 1<br>interface vlan " +
      vlan +
      "<br>ip address " +
      ip +
      " " +
      mask +
      "<br>interface ethernet 1/25-28<br>ip dhcp snooping trust<br>switchport mode trunk<br>switchport acceptable-frame-types tagged<br>switchport allowed vlan add " +
      vlan +
      " tagged<br>switchport allowed vlan add 1 untagged<br>switchport native vlan 1<br>spanning-tree spanning-disabled<br>spanning-tree bpdu-filter<br>exit<br>ip default-gateway " +
      gateway +
      "<br>prompt " +
      promt +
      "<br>exit<br>copy running-config startup-config";
  }

  if (document.getElementById("switch").value === "Edge-Core-52") {
    document.getElementById("config").innerHTML = "Edge-Core-52 " + ip;
  }
  if (document.getElementById("switch").value === "D-Link-3028") {
    document.getElementById("config").innerHTML = "D-Link-3028 " + ip;
  }
  if (document.getElementById("switch").value === "Eltex-1124fb") {
    document.getElementById("config").innerHTML = "Eltex-1124fb " + ip;
  }
  if (document.getElementById("switch").value === "Eltex-2424") {
    document.getElementById("config").innerHTML = "Eltex-2424 " + ip;
  }
  if (document.getElementById("switch").value === "Eltex-2324fb") {
    document.getElementById("config").innerHTML = "Eltex-2324fb " + ip;
  }
  if (document.getElementById("switch").value === "Mikrotik-crs-326") {
    document.getElementById("config").innerHTML = "Mikrotik-crs-326 " + ip;
  }
}

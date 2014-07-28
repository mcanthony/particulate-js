lib.PointConstraint = PointConstraint;
function PointConstraint(position, index) {
  this.position = new Float32Array(position);
  this.index = index;
}

PointConstraint.create = function (position, index) {
  return new PointConstraint(position, index);
};

PointConstraint.prototype = Object.create(lib.Constraint.prototype);

PointConstraint.prototype.setPosition = function (x, y, z) {
  lib.Vec3.set(this.position, 0, x, y, z);
};

PointConstraint.prototype.applyConstraint = function (p0, p1, w0) {
  var i = this.index;
  var ix = i * 3, iy = ix + 1, iz = ix + 2;
  var p = this.position;

  p0[ix] = p1[ix] = p[0];
  p0[iy] = p1[iy] = p[1];
  p0[iz] = p1[iz] = p[2];
};
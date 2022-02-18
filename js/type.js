/**
 *
 * Copyright (C) 2020 Cody M. Jones <codymjones@pm.me>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 */

var tw = {
  container: "typein",
  text: "cody@host:~$ ",
  delay: 115,

  timer: null,
  pointer: 0,
  block: 0,

  draw : function () {
    tw.pointer++;
    tw.container.innerHTML = tw.text.substring(0, tw.pointer);
    if (tw.pointer < tw.text.length) {
      tw.timer = setTimeout(tw.draw, tw.delay);
    }
  }
};

document.addEventListener("DOMContentLoaded", function(){
  tw.container = document.getElementById(tw.container);
  tw.draw();
});

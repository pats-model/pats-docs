(function() {var implementors = {};
implementors["console"] = [{"text":"impl&lt;D:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"console/struct.StyledObject.html\" title=\"struct console::StyledObject\">StyledObject</a>&lt;D&gt;","synthetic":false,"types":["console::utils::StyledObject"]}];
implementors["crossbeam_epoch"] = [{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"crossbeam_epoch/trait.Pointable.html\" title=\"trait crossbeam_epoch::Pointable\">Pointable</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"crossbeam_epoch/struct.Atomic.html\" title=\"struct crossbeam_epoch::Atomic\">Atomic</a>&lt;T&gt;","synthetic":false,"types":["crossbeam_epoch::atomic::Atomic"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"crossbeam_epoch/trait.Pointable.html\" title=\"trait crossbeam_epoch::Pointable\">Pointable</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"crossbeam_epoch/struct.Shared.html\" title=\"struct crossbeam_epoch::Shared\">Shared</a>&lt;'_, T&gt;","synthetic":false,"types":["crossbeam_epoch::atomic::Shared"]}];
implementors["env_logger"] = [{"text":"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"env_logger/fmt/struct.StyledValue.html\" title=\"struct env_logger::fmt::StyledValue\">StyledValue</a>&lt;'a, T&gt;","synthetic":false,"types":["env_logger::fmt::writer::termcolor::imp::StyledValue"]}];
implementors["nalgebra"] = [{"text":"impl&lt;T, R:&nbsp;<a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, C:&nbsp;<a class=\"trait\" href=\"nalgebra/base/dimension/trait.Dim.html\" title=\"trait nalgebra::base::dimension::Dim\">Dim</a>, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"nalgebra/base/struct.Matrix.html\" title=\"struct nalgebra::base::Matrix\">Matrix</a>&lt;T, R, C, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"nalgebra/base/trait.Scalar.html\" title=\"trait nalgebra::base::Scalar\">Scalar</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"nalgebra/base/storage/trait.RawStorage.html\" title=\"trait nalgebra::base::storage::RawStorage\">RawStorage</a>&lt;T, R, C&gt;,&nbsp;</span>","synthetic":false,"types":["nalgebra::base::matrix::Matrix"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
// autogenerated by reconstant - do not edit!

// types

// constants
export const SOME_CONSTANT = "this is a constant string"
export const OTHER_CONSTANT = 42

// enums
export const SomeEnum = {
	A : 0,
	B : 1,
	C : 2,
}

SomeEnum.Mixin = {
  created () {
      this.SomeEnum = SomeEnum
  }
}
export const OtherEnum = {
	FOO : 0,
	BAR : 1,
}

OtherEnum.Mixin = {
  created () {
      this.OtherEnum = OtherEnum
  }
}
